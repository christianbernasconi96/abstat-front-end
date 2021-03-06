export class Ontology {

  constructor(
    private _id: string,
    private _name: string,
    private _timestamp: string,
  ){
  }

  get id(): string { return this._id; }
  set id(value: string) { this._id = value; }

  get name(): string { return this._name; }
  set name(value: string) { this._name = value; }

  get timestamp(): string { return this._timestamp; }
  set timestamp(value: string) { this._timestamp = value; }
}
