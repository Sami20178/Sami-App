const navButtons = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');

function showPanel(pageKey) {
  panels.forEach((panel) => {
    const isTarget = panel.dataset.panel === pageKey;
    panel.classList.toggle('hidden', !isTarget);
  });
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    navButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const page = button.dataset.page;
    if (!page) return;

    const pageExists = [...panels].some((panel) => panel.dataset.panel === page);
    if (pageExists) {
      showPanel(page);
    }
  });
});
