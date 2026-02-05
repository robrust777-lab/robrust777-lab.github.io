document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(0.9)' },
        { transform: 'scale(1)' }
      ],
      {
        duration: 300,
        easing: 'ease-out'
      }
    );
    alert('Покупка в разработке 😉');
  });
});
