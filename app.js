const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Voluptatem",
    image:
      "https://images.unsplash.com/photo-1510279931157-4ca63af8a363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Explicabo",
    image:
      "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Rchitecto",
    image:
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Beatae",
    image:
      "https://images.unsplash.com/photo-1502849394214-c4b6352145ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Vitae",
    image:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Inventore",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Veritatis",
    image:
      "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    name: "Accusantium",
    image:
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
                <div class="card">
                    <img class="card--avatar" src=${image} />
                    <h1 class = "card--title">${name}</h1>
                    <a class="card--link" href="#">Taste</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => this.console.log("service worker registered"))
      .catch(err => this.console.log("service worker not registered", err));
  });
}
