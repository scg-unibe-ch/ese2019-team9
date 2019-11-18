export class Category {
    private _id?: string;
    private _name: string;
    private _parentId: string;
    private _slug: string;
    private _image: string;
    private _parentSlug: string;

    constructor(name: string, slug: string, image: string, id?: string, parentId?: string, parentSlug?: string){
        this.name = name;
        this.slug = slug;
        this.image = image;
        if (id) this.id = id;
        if (parentId) this.parentId = parentId;
        if (parentSlug) this._parentSlug = parentSlug;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get parentId(): string {
        return this._parentId;
    }
    public set parentId(value: string) {
        this._parentId = value;
    }
    public get slug(): string {
        return this._slug;
    }
    public set slug(value: string) {
        this._slug = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._parentSlug = value;
    }
    public get parentSlug(): string {
        return this._parentSlug;
    }
    public set parentSlug(value: string) {
        this._parentSlug = value;
    }
    public toJSON() {
        console.log(this.parentSlug);
        return JSON.parse(`{"name":"${this.name}", "slug":"${this.slug}" ${(this.id)? `,"id":"${this.id}"` : ""} ${(this.parentSlug)? `,"parentSlug":"${this.parentSlug}"` : ""}}`);
    }
}