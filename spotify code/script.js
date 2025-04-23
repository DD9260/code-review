const buttons = document.querySelectorAll('.QnA_Btn_box button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
    button.classList.toggle('active');
  });
});
