import { Request, Response } from "express";
import { ListBySenderService } from "../services/ListBySenderService";


class ListBySenderController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listBySenderController = new ListBySenderService();
    const compliments = await listBySenderController.execute(user_id);

    return response.json(compliments);
  }
}

export { ListBySenderController }