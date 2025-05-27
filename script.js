function filterTabs(value) {
    // Optional: handle your filtering logic here
    console.log("Filter selected:", value);

    // Sync the tab UI (optional)
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.value === value) {
            tab.classList.add('active');
        }
    });
}

document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs(tab.dataset.value);
        document.querySelector('select.form-select').value = tab.dataset.value;
    });
});
