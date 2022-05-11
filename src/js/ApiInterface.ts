export async function requestFilms(
  genres: any[],
  types: any[],
  text: string,
  currentPage: number,
  pageSize: number
) {
  let Url = "http://localhost:8080/api/search?genre=";

  for (const genre of genres) {
    Url = Url + `${genre.value},`;
  }
  Url = Url.slice(0, Url.length - 1);
  Url = Url + "&type=";
  for (const type of types) {
    Url = Url + `${type.value},`;
  }
  Url = Url.slice(0, Url.length - 1);
  Url = Url + `&q=${text}`;
  Url = Url + `&from=${(currentPage - 1) * pageSize}&size=${pageSize}`;
  console.log(Url);
  return await fetch(Url).then((response) => response.json());
}

export async function getInitialGenres() {
  const Url = "http://localhost:8080/api/search?agg=genres&q=";
  return (await fetch(Url).then((resolve) => resolve.json())).map(
    (elem: any) => ({ name: elem.key, value: elem.key })
  );
}

export async function getInitialTypes() {
  const Url = "http://localhost:8080/api/search?agg=titleType&q=";
  return (await fetch(Url).then((resolve) => resolve.json())).map(
    (elem: any) => ({
      name: removeCamelCase(elem.key),
      value: elem.key,
    })
  );
}

function removeCamelCase(str: string) {
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
}
