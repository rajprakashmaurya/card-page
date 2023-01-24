import React from "react";

function Form() {
  return (
    <div class="row justify-content-center my-5">
      <div class="col-lg-6">
        <form>
          <label class="form-label">Email:</label>
          <input class="form-control" type="email" />
          <div class="form-floating my-5">
            <input
              id="name"
              type="name"
              class="form-control"
              placeholder="eg.John"
            />
            <label for="name">Name:</label>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-danger rounded">
              Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
