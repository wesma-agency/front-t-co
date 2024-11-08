const $tagsBoxes = document.querySelectorAll('.tags');
$tagsBoxes.forEach($tags => {
    const $more = $tags.querySelector('.tags__more');
    const $less = $tags.querySelector('.tags__less');

    $more.addEventListener('click', () => $tags.classList.add('tags--active'));
    $less.addEventListener('click', () => $tags.classList.remove('tags--active'));
});
