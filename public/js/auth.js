// lvlBase Auth Module
// Handles all Firebase Authentication operations

const auth = firebase.auth();

// ===== VALIDATION HELPERS =====
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password && password.length >= 8;
}

function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (el) { el.textContent = message; el.classList.add('show'); }
}

function clearError(elementId) {
  const el = document.getElementById(elementId);
  if (el) { el.textContent = ''; el.classList.remove('show'); }
}

function showAlert(elementId, message, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = `alert alert-${type} show`;
}

function setButtonLoading(btn, loading) {
  if (!btn) return;
  if (loading) {
    btn.dataset.originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Processing...';
    btn.classList.add('btn-loading');
  } else {
    btn.innerHTML = btn.dataset.originalText || 'Submit';
    btn.classList.remove('btn-loading');
  }
}

// ===== SIGN IN WITH EMAIL =====
async function signInWithEmail(email, password) {
  const btn = document.getElementById('signin-btn');
  clearError('email-error');
  clearError('password-error');

  let valid = true;
  if (!email || !validateEmail(email)) {
    showError('email-error', 'Please enter a valid email address.');
    valid = false;
  }
  if (!password) {
    showError('password-error', 'Please enter your password.');
    valid = false;
  }
  if (!valid) return;

  setButtonLoading(btn, true);
  try {
    await auth.signInWithEmailAndPassword(email, password);
    window.location.href = './dashboard.html';
  } catch (err) {
    setButtonLoading(btn, false);
    let msg = 'Sign in failed. Please try again.';
    if (err.code === 'auth/user-not-found') msg = 'No account found with this email.';
    else if (err.code === 'auth/wrong-password') msg = 'Incorrect password. Try again.';
    else if (err.code === 'auth/too-many-requests') msg = 'Too many failed attempts. Please try later.';
    else if (err.code === 'auth/invalid-email') msg = 'Invalid email address format.';
    showAlert('auth-alert', msg, 'error');
  }
}

// ===== REGISTER WITH EMAIL =====
async function registerWithEmail(name, email, password, orgName, orgType) {
  const btn = document.getElementById('register-btn');
  clearError('name-error');
  clearError('reg-email-error');
  clearError('reg-password-error');
  clearError('org-error');

  let valid = true;
  if (!name || name.trim().length < 2) {
    showError('name-error', 'Please enter your full name.');
    valid = false;
  }
  if (!email || !validateEmail(email)) {
    showError('reg-email-error', 'Please enter a valid email address.');
    valid = false;
  }
  if (!validatePassword(password)) {
    showError('reg-password-error', 'Password must be at least 8 characters.');
    valid = false;
  }
  if (!orgName || orgName.trim().length < 2) {
    showError('org-error', 'Please enter your organization name.');
    valid = false;
  }
  if (!valid) return;

  setButtonLoading(btn, true);
  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    await cred.user.updateProfile({ displayName: name });
    window.location.href = './dashboard.html';
  } catch (err) {
    setButtonLoading(btn, false);
    let msg = 'Registration failed. Please try again.';
    if (err.code === 'auth/email-already-in-use') msg = 'This email is already registered. Try signing in.';
    else if (err.code === 'auth/weak-password') msg = 'Password is too weak. Use at least 8 characters.';
    else if (err.code === 'auth/invalid-email') msg = 'Invalid email address format.';
    showAlert('reg-alert', msg, 'error');
  }
}

// ===== SIGN IN WITH GOOGLE =====
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    window.location.href = './dashboard.html';
  } catch (err) {
    let msg = 'Google sign in failed.';
    if (err.code === 'auth/popup-blocked') msg = 'Popup was blocked. Please allow popups for this site.';
    else if (err.code === 'auth/cancelled-popup-request') return;
    const alertEl = document.getElementById('auth-alert') || document.getElementById('reg-alert');
    if (alertEl) showAlert(alertEl.id, msg, 'error');
  }
}

// ===== SIGN IN WITH GITHUB =====
async function signInWithGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    window.location.href = './dashboard.html';
  } catch (err) {
    let msg = 'GitHub sign in failed.';
    const alertEl = document.getElementById('auth-alert') || document.getElementById('reg-alert');
    if (alertEl) showAlert(alertEl.id, msg, 'error');
  }
}

// ===== RESET PASSWORD =====
async function resetPassword(email) {
  const btn = document.getElementById('reset-btn');
  clearError('reset-email-error');

  if (!email || !validateEmail(email)) {
    showError('reset-email-error', 'Please enter a valid email address.');
    return;
  }

  setButtonLoading(btn, true);
  try {
    await auth.sendPasswordResetEmail(email);
    showAlert('reset-alert', 'Password reset link sent! Check your inbox.', 'success');
    document.getElementById('reset-form').style.display = 'none';
  } catch (err) {
    setButtonLoading(btn, false);
    let msg = 'Failed to send reset email.';
    if (err.code === 'auth/user-not-found') msg = 'No account found with this email address.';
    else if (err.code === 'auth/invalid-email') msg = 'Invalid email address format.';
    showAlert('reset-alert', msg, 'error');
  }
}

// ===== SIGN OUT =====
async function signOutUser() {
  try {
    await auth.signOut();
    window.location.href = './login.html';
  } catch (err) {
    console.error('Sign out failed:', err);
  }
}

// ===== AUTH STATE LISTENER (for dashboard) =====
function authStateListener() {
  auth.onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href = './login.html';
      return;
    }
    // Update UI with user info
    const nameEl = document.getElementById('user-name');
    const emailEl = document.getElementById('user-email');
    const avatarEl = document.getElementById('user-avatar');
    if (nameEl) nameEl.textContent = user.displayName || 'User';
    if (emailEl) emailEl.textContent = user.email;
    if (avatarEl) {
      const initials = (user.displayName || user.email || 'U').substring(0, 1).toUpperCase();
      avatarEl.textContent = initials;
    }
  });
}

// ===== FORM EVENT BINDINGS =====
document.addEventListener('DOMContentLoaded', function() {
  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      signInWithEmail(email, password);
    });
  }

  // Register form
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('full-name').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const password = document.getElementById('reg-password').value;
      const orgName = document.getElementById('org-name').value.trim();
      const orgType = document.getElementById('org-type').value;
      registerWithEmail(name, email, password, orgName, orgType);
    });
  }

  // Forgot password form
  const resetForm = document.getElementById('reset-form');
  if (resetForm) {
    resetForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('reset-email').value.trim();
      resetPassword(email);
    });
  }

  // Google login buttons
  document.querySelectorAll('.google-login-btn').forEach(function(btn) {
    btn.addEventListener('click', signInWithGoogle);
  });

  // GitHub login buttons
  document.querySelectorAll('.github-login-btn').forEach(function(btn) {
    btn.addEventListener('click', signInWithGithub);
  });

  // Sign out button
  const signOutBtn = document.getElementById('signout-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', signOutUser);
  }

  // Dashboard auth guard
  if (document.body.dataset.page === 'dashboard') {
    authStateListener();
  }
});
