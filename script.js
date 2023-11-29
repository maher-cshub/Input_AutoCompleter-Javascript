export default function Autocompleter(input_id, output_id, data) {
  const input = document.getElementById(input_id);
  const items = document.getElementById(output_id);
  const items_list = document.createElement("ul");
  items.appendChild(items_list);
  function handFocus(e) {
    input.value = e.target.innerHTML;
    handleSearch();
  }
  function handleSearch(e) {
    items_list.innerHTML = "";
    const items2show = data.filter((element) => {
      return element.includes(input.value) && input.value.length != 0;
    });
    for (let i = 0; i < items2show.length; i++) {
      let el = document.createElement("li");
      el.innerHTML = items2show[i];
      el.addEventListener("click", handFocus);
      items_list.appendChild(el);
    }
  }

  input.addEventListener("keyup", handleSearch);
}
