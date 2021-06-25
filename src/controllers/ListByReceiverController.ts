import { Request, Response } from "express";
import { ListByReceiverService } from "../services/ListByReceiverService";


class ListByReceiverController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const listByReceiverController = new ListByReceiverService();
    const compliments = await listByReceiverController.execute(user_id);

    return response.json(compliments);
  }
}

export { ListByReceiverController }