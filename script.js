const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-04", "01-05"],
  salad: ["01-03"],
  dog: ["01-02"],
}

nlwSetup.setData(data)
nlwSetup.load()
