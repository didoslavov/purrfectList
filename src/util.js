export function setUserData(userData) {
  localStorage.setItem('userData', JSON.stringify(userData));
}
export function getUserData() {
  return JSON.parse(localStorage.getItem('userData'));
}

export function clearUserData() {
  localStorage.removeItem('userData');
}

export function updateNavBar() {
  const userData = getUserData();

  if (userData) {
    document.querySelector('.user').style.display = 'block';
    document.querySelector('.guest').style.display = 'none';
  } else {
    document.querySelector('.user').style.display = 'none';
    document.querySelector('.guest').style.display = 'block';
  }
}
