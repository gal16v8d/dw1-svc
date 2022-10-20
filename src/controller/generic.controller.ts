import { Request, RequestHandler, Response } from 'express';
import { Model, PopulateOptions } from 'mongoose';

class GenericController {
  model: Model<
    unknown,
    Record<string, unknown>,
    Record<string, unknown>,
    Record<string, unknown>
  >;
  dataType: string;
  populateOpts?: PopulateOptions[];

  constructor(
    model: Model<
      unknown,
      Record<string, unknown>,
      Record<string, unknown>,
      Record<string, unknown>
    >,
    dataType: string,
    populateOpts?: PopulateOptions[]
  ) {
    this.model = model;
    this.dataType = dataType;
    this.populateOpts = populateOpts;
  }

  populateData = (data: unknown, expanded: boolean) => {
    return expanded && this.populateOpts
      ? this.model.populate(data, this.populateOpts ?? [])
      : data;
  };

  public getAll: RequestHandler = async (req, res) => {
    const expanded = req.query.lvl && Number(req.query.lvl) >= 1;
    await this.model
      .find()
      .then((data) => this.populateData(data, !!expanded))
      .then((dataArr) => res.json(dataArr))
      .catch((err) => res.status(500).json({ message: err.stack }));
  };

  checkFindOne = (data: unknown, req: Request, res: Response) => {
    if (!data) {
      res.status(404).json({
        message: `Couldn't find any ${this.dataType} with id ${req.params.id}`,
      });
    } else {
      res.json(data);
    }
  };

  public getById: RequestHandler = async (req, res) => {
    const expanded = req.query.lvl && Number(req.query.lvl) >= 1;
    await this.model
      .findById(req.params.id)
      .then((data) => this.populateData(data, !!expanded))
      .then((data) => this.checkFindOne(data, req, res))
      .catch((err) => res.status(500).json({ message: err.stack }));
  };

  public save: RequestHandler = async (req, res) => {
    await this.model
      .create(req.body)
      .then((answer) =>
        res.status(201).json({
          message: req.body.name
            ? `'${req.body.name}' stored successfully with id: ${answer._id}`
            : `stored successfully with id: ${answer._id}`,
        })
      )
      .catch((err) => res.status(500).json({ message: err.stack }));
  };

  public update: RequestHandler = async (req, res) => {
    await this.model
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() =>
        res.json({ message: `${req.params.id} updated successfully` })
      )
      .catch((err) => res.status(500).json({ message: err.stack }));
  };

  public delete: RequestHandler = async (req, res) => {
    await this.model
      .findByIdAndRemove(req.params.id)
      .then(() =>
        res.json({ message: `${req.params.id} deleted successfully` })
      )
      .catch((err) => res.status(500).json({ message: err.stack }));
  };
}

export default GenericController;
