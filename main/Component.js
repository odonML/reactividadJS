const d = document;

function Component(options) {
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
}

Component.prototype.render = function  () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
};

Component.prototype.setState = function (obj) {
    for(let key in obj){
        if(this.data.hasOwnProperty(key)){
            this.data[key] = obj[key]
        }
    }
    this.render();
};

Component.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
};

export default Component
