const menu = [{

    id: 1,
    title: "kumkum",
    category: "kumkum",
    price: "Rs.550",
    img: "kohi.png",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"


},
{
    id: 2,
    title: "pari",
    category: "pari",
    price: "Rs.600",
    img: "kohi.png",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"

},
{
    id: 3,
    title: "kumkum",
    category: "kumkum",
    price: "Rs.550",
    img: "kohi.png",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"

},
{
    id: 4,
    title: "pari",
    category: "pari",
    price: "Rs.600",
    img: "kohi.png",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"

},
{
    id: 5,
    title: "kumkum",
    category: "kumkum",
    price: "Rs.650",
    img: "https://scontent.fstv2-1.fna.fbcdn.net/v/t1.6435-9/106366399_110695384028561_6681488471499799311_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=H30QI1LeWm4AX9HCpbO&_nc_oc=AQkPsJ7M52pxX6AB4HaksI7VGbAEo37sa77fvRalyvZFZK_LYe3VLFKFK1Nt5559egQ&_nc_ht=scontent.fstv2-1.fna&oh=9cc8c0179c56e10d93beaf7b0a279fa6&oe=60D4C7A5",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"
},

{
    id: 6,
    title: "parichay",
    category: "parichay",
    price: "Rs.950",
    img: "https://images.pexels.com/photos/14312320/pexels-photo-14312320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"
},
{
    id: 7,
    title: "pari",
    category: "pari",
    price: "Rs.600",
    img: "https://images.pexels.com/photos/14312320/pexels-photo-14312320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"
},

{
    id: 8,
    title: "kumkum",
    category: "kumkum",
    price: "Rs.650",
    img: "kohi.png",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"
},
{
    id: 9,
    title: "parichay",
    category: "parichay",
    price: "Rs.950",
    img: "https://images.pexels.com/photos/14312320/pexels-photo-14312320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "this is a semi weighless saree with 6 meter long.it has maharani lace with blouse"

}







]

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}
