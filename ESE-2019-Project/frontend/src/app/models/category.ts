/**
 * Category Model for better type oriented programming
 */
export class Category {
    /**
     * The id of a category
     */
    private _id?: string;
    
    /**
     * The name of a category
     */
    private _name: string;

    /**
     * The Id of the parent Category
     */
    private _parentId: string;

    /**
     * The slug of the category
     */
    private _slug: string;

    /**
     * The image of a category
     */
    private _image: string;

    /**
     * The slug of the parent Category
     */
    private _parentSlug: string;

    /**
     * Assings all given variables to the private variables
     * @param name the name of the category
     * @param slug the slug of the category
     * @param image the image of the category
     * @param id the id of the category
     * @param parentId the id of the parent category
     * @param parentSlug the slug of the parent category
     */
    constructor(name: string, slug: string, image: string, id?: string, parentId?: string, parentSlug?: string){
        this.name = name;
        this.slug = slug;
        this.image = image;
        if (id) this.id = id;
        if (parentId) this.parentId = parentId;
        if (parentSlug) this._parentSlug = parentSlug;
    }

    /**
     * @ignore
     */
    public get id(): string {
        return this._id;
    }
    /**
     * @ignore
     */
    public set id(value: string) {
        this._id = value;
    }
    /**
     * @ignore
     */
    public get name(): string {
        return this._name;
    }
    /**
     * @ignore
     */
    public set name(value: string) {
        this._name = value;
    }
    /**
     * @ignore
     */
    public get parentId(): string {
        return this._parentId;
    }
    /**
     * @ignore
     */
    public set parentId(value: string) {
        this._parentId = value;
    }
    /**
     * @ignore
     */
    public get slug(): string {
        return this._slug;
    }
    /**
     * @ignore
     */
    public set slug(value: string) {
        this._slug = value;
    }
    /**
     * @ignore
     */
    public get image(): string {
        return this._image;
    }
    /**
     * @ignore
     */
    public set image(value: string) {
        this._parentSlug = value;
    }
    /**
     * @ignore
     */
    public get parentSlug(): string {
        return this._parentSlug;
    }
    /**
     * @ignore
     */
    public set parentSlug(value: string) {
        this._parentSlug = value;
    }
    /**
     * Returns the category as a JSON object
     */
    public toJSON() {
        return JSON.parse(`{"name":"${this.name}", "slug":"${this.slug}" ${(this.id)? `,"id":"${this.id}"` : ""} ${(this.parentSlug)? `,"parentSlug":"${this.parentSlug}"` : ""}}`);
    }
}