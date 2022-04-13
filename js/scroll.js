function follow(item) {
  let href=item.href;
  let id=href.slice(50);
  console.log(id);
  document.getElementById(id).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}
