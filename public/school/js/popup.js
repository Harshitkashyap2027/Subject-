// Popup System
const PopupSystem = (() => {
  let overlay = null;
  let toastContainer = null;

  function init() {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'popup-overlay';
      overlay.innerHTML = `<div class="popup-box"><div class="popup-icon" id="popupIcon"></div><div class="popup-title" id="popupTitle"></div><div class="popup-message" id="popupMsg"></div><div class="popup-actions" id="popupActions"></div></div>`;
      document.body.appendChild(overlay);
    }
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
  }

  function showPopup({ type = 'info', title, message, icon, actions = [] }) {
    init();
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️', confirm: '🤔' };
    document.getElementById('popupIcon').textContent = icon || icons[type];
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupMsg').textContent = message;
    const actionsEl = document.getElementById('popupActions');
    actionsEl.innerHTML = '';
    if (actions.length === 0) {
      actions = [{ label: 'OK', style: 'primary', onClick: () => hidePopup() }];
    }
    actions.forEach(action => {
      const btn = document.createElement('button');
      btn.className = `btn btn-${action.style || 'secondary'}`;
      btn.textContent = action.label;
      btn.onclick = () => { hidePopup(); if (action.onClick) action.onClick(); };
      actionsEl.appendChild(btn);
    });
    overlay.classList.add('show');
    if (type === 'success' && actions.length === 1) {
      setTimeout(hidePopup, 3000);
    }
  }

  function hidePopup() {
    if (overlay) overlay.classList.remove('show');
  }

  function showSuccess(title, msg) {
    showPopup({ type: 'success', title, message: msg, icon: '✅', actions: [{ label: 'Great!', style: 'success', onClick: hidePopup }] });
  }
  function showError(title, msg) {
    showPopup({ type: 'error', title, message: msg, icon: '❌', actions: [{ label: 'Close', style: 'danger', onClick: hidePopup }] });
  }
  function showWarning(title, msg) {
    showPopup({ type: 'warning', title, message: msg, icon: '⚠️', actions: [{ label: 'OK', style: 'secondary', onClick: hidePopup }] });
  }
  function showInfo(title, msg) {
    showPopup({ type: 'info', title, message: msg, icon: 'ℹ️', actions: [{ label: 'OK', style: 'primary', onClick: hidePopup }] });
  }
  function showConfirm(title, msg, onConfirm) {
    showPopup({ type: 'confirm', title, message: msg, icon: '🤔', actions: [
      { label: 'Cancel', style: 'secondary', onClick: hidePopup },
      { label: 'Confirm', style: 'primary', onClick: () => { hidePopup(); onConfirm && onConfirm(); } }
    ]});
  }
  function showToast(msg, type = 'success') {
    init();
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
  }

  return { showPopup, hidePopup, showSuccess, showError, showWarning, showInfo, showConfirm, showToast };
})();

const showPopup = PopupSystem.showPopup.bind(PopupSystem);
const showSuccess = PopupSystem.showSuccess.bind(PopupSystem);
const showError = PopupSystem.showError.bind(PopupSystem);
const showWarning = PopupSystem.showWarning.bind(PopupSystem);
const showInfo = PopupSystem.showInfo.bind(PopupSystem);
const showConfirm = PopupSystem.showConfirm.bind(PopupSystem);
const showToast = PopupSystem.showToast.bind(PopupSystem);
