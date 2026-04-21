// Firebase School Integration (CDN compat)
const FirebaseSchool = (() => {
  let db = null;
  let auth = null;

  function init() {
    try {
      if (typeof firebase !== 'undefined') {
        db = firebase.firestore();
        auth = firebase.auth();
      }
    } catch(e) { console.log('Firebase not configured, using demo mode'); }
  }

  async function login(email, password) {
    if (!auth) return { success: false, error: 'Firebase not configured' };
    try {
      const cred = await auth.signInWithEmailAndPassword(email, password);
      return { success: true, user: cred.user };
    } catch(e) { return { success: false, error: e.message }; }
  }
  async function logout() {
    if (!auth) return;
    try { await auth.signOut(); } catch(e) {}
  }
  function getCurrentUser() {
    if (!auth) return null;
    return auth.currentUser;
  }
  function onAuthChange(callback) {
    if (!auth) { callback(null); return; }
    return auth.onAuthStateChanged(callback);
  }

  async function getDocument(collection, id) {
    if (!db) return null;
    try {
      const doc = await db.collection(collection).doc(id).get();
      return doc.exists ? { id: doc.id, ...doc.data() } : null;
    } catch(e) { console.error(e); return null; }
  }
  async function setDocument(collection, id, data) {
    if (!db) return false;
    try { await db.collection(collection).doc(id).set(data, { merge: true }); return true; }
    catch(e) { console.error(e); return false; }
  }
  async function addDocument(collection, data) {
    if (!db) return null;
    try { const ref = await db.collection(collection).add({ ...data, createdAt: firebase.firestore.FieldValue.serverTimestamp() }); return ref.id; }
    catch(e) { console.error(e); return null; }
  }
  async function updateDocument(collection, id, data) {
    if (!db) return false;
    try { await db.collection(collection).doc(id).update({ ...data, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }); return true; }
    catch(e) { console.error(e); return false; }
  }
  async function deleteDocument(collection, id) {
    if (!db) return false;
    try { await db.collection(collection).doc(id).delete(); return true; }
    catch(e) { console.error(e); return false; }
  }
  async function queryDocuments(collection, filters = [], orderByField = null, limitN = 50) {
    if (!db) return [];
    try {
      let q = db.collection(collection);
      filters.forEach(([field, op, value]) => { q = q.where(field, op, value); });
      if (orderByField) q = q.orderBy(orderByField, 'desc');
      if (limitN) q = q.limit(limitN);
      const snap = await q.get();
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch(e) { console.error(e); return []; }
  }
  function listenToCollection(collection, filters = [], callback) {
    if (!db) { callback([]); return () => {}; }
    let q = db.collection(collection);
    filters.forEach(([field, op, value]) => { q = q.where(field, op, value); });
    return q.onSnapshot(snap => callback(snap.docs.map(d => ({ id: d.id, ...d.data() }))));
  }

  init();
  return { login, logout, getCurrentUser, onAuthChange, getDocument, setDocument, addDocument, updateDocument, deleteDocument, queryDocuments, listenToCollection };
})();
