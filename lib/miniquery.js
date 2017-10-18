let SweetSelector = {
  select: function(input) {
    return document.querySelectorAll(input);
  }
}


let DOM = {
  hide: function(input) {
    SweetSelector.select(input).forEach(element => {
      element.setAttribute("style", "display: none")
    })
  },
  show: function(input) {
    SweetSelector.select(input).forEach(element => {
      element.removeAttribute("style")
    })
  },
  removeClass: function(input, className) {
    SweetSelector.select(input).forEach(element => {
      element.classList.remove(className);
    })
  },
  addClass: function(input, className) {
    SweetSelector.select(input).forEach(element => {
      element.classList.add(className);
    })
  }
}

let EventDispatcher = {
  on: function(object, event, cb) {
    SweetSelector.select(object).forEach(element => {
      element.addEventListener(event, cb);
    })
  },
  trigger: function(object, event) {
    let eventObj = new Event(event);
    SweetSelector.select(object).forEach(element => {
      element.dispatchEvent(eventObj);
    })
  }
}

let AjaxWrapper = {
  request: function(object) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (object.hasOwnProperty('success')) {
          object.success(this.responseText);
        }
      } else {
        if (object.hasOwnProperty('fail')) {
          object.fail();
        }
      }
    };
    xhttp.open(object.type, object.url, true);
    xhttp.send();
  }
}

class Miniquery {
  constructor(param) {
    this.param = SweetSelector.select(param);
  }

  hide() {
    this.param.forEach(element => {
      element.setAttribute("style", "display: none")
    })
  }
  show() {
    this.param.forEach(element => {
      element.removeAttribute("style")
    })
  }
  removeClass(className) {
    this.param.forEach(element => {
      element.classList.remove(className);
    })
  }
  addClass(className) {
    this.param.forEach(element => {
      element.classList.add(className);
    })
  }
  on(object, event, cb) {
    this.param.forEach(element => {
      element.addEventListener(event, cb);
    })
  }
  trigger(object, event) {
    let eventObj = new Event(event);
    this.param.forEach(element => {
      element.dispatchEvent(eventObj);
    })
  }
  request(object) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (object.hasOwnProperty('success')) {
          object.success(this.responseText);
        }
      } else {
        if (object.hasOwnProperty('fail')) {
          object.fail();
        }
      }
    };
    xhttp.open(object.type, object.url, true);
    xhttp.send();
  }
}

const miniquery = function(param) {
  return new Miniquery(param)
}

const $ = function(param) {
  return new Miniquery(param)
}
