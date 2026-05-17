import {BaseApi} from "../../shared/infrastructure/base-api.js";

const categoriesEndPointPath = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;

export class PublishingApi extends BaseApi {
    #categoriesEndpoint;
    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this, categoriesEndPointPath);
    }

    getCategorires(){
        return this.#categoriesEndpoint.getAll();
    }

    getCategoryById(id){
        return this.#categoriesEndpoint.getById(id);
    }

    createCategory(resource){
        return this.#categoriesEndpoint.create(resource);
    }

    updateCategory(resource){
        return this.#categoriesEndpoint.update(resource.id, resource);
    }

    deleteCategory(id){
        return this.#categoriesEndpoint.delete(id);
    }
}