import Card from "./Card";

function Cards() {
  return (
    <div class="row my-5">
      <div class="col">
        <div class="card-group">
          <Card title="Title one" description="This is description-one" />
          <Card title="Title two" description="This is description-two" />
          <Card title="Title three" description="This is description-three" />
        </div>
      </div>
    </div>
  );
}
export default Cards;
