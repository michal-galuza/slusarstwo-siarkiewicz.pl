let photos2 = [];
function addImg(tab, amount, location) {
  for (let i = 0; i < amount; i++) {
    tab[i] = {
      src: require(`../../images/${location}/${location} (${i + 1}).jpg`),
    };
  }
}
addImg(photos2, 23, "Balustrady");
let photos = [];
addImg(photos, 18, "Ogrodzenia");
export default { photos, photos2 };
//dodawanie zdjęc na podstawie takich samych nazw rózniących się tylko numerami
//gdy będą nowe zdjęcia wystarczy zwiększtyć drugi argument o ilośc zdjęć
