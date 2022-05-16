import createStore from "@/store";

//Methods for text formats

export function arrayToString(array: any) {
  let arraystr = "";
  if (typeof array !== "string" && typeof array === typeof []) {
    for (const elem of array) {
      if (elem !== "\\N") {
        arraystr = arraystr + elem + ", ";
      } else {
        arraystr = arraystr + "Unknown" + ", ";
      }
    }
    arraystr = arraystr.slice(0, arraystr.length - 2);
  } else {
    arraystr = array;
  }
  return arraystr;
}

export function removeCamelCase(str: string) {
  if (str !== undefined) {
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

  return str;
}

//Methods related with the IntersectionObserver

export function createIntersectionObserver(observerTarget: Element) {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(observerTarget);

  return observer;
}

export function removeIntersectionObserver(
  observer: IntersectionObserver,
  observerTarget: Element
) {
  console.log(observer);
  console.log(observerTarget);
  observer.unobserve(observerTarget);
  createStore.dispatch("initializePageCounter");
}

function handleIntersect(entries: any[], observer: any) {
  entries.forEach((entry) => {
    createStore.dispatch("changeNextPage");
  });
}
