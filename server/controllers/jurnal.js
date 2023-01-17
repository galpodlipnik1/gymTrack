import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();
import jurnalModel from '../models/jurnal.js';

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await jurnalModel.find({ owner: req.userId });

    console.log(
      chalk.green.bold(
        `[${new Date().toLocaleString()}] GET /jurnal/getWorkouts ${
          workouts.length
        } workouts retrieved.`
      )
    );
    res.status(200).json(workouts);
  } catch (error) {
    console.log(
      chalk.red.bold(`[${new Date().toLocaleString()}] GET /jurnal/getWorkouts ${error}`)
    );
    res.status(404).json({ message: error.message });
  }
};

export const addWorkout = async (req, res) => {
  try {
    const { title, exercises, date, duration } = req.body;
    const owner = req.userId;

    const newWorkout = jurnalModel.create({ title, exercises, date, duration, owner });

    console.log(
      chalk.green.bold(
        `[${new Date().toLocaleString()}] POST /jurnal/addWorkout ${newWorkout.title} added.`
      )
    );
    res.status(201).json(newWorkout);
  } catch (error) {
    console.log(
      chalk.red.bold(`[${new Date().toLocaleString()}] POST /jurnal/addWorkout ${error}`)
    );
    res.status(409).json({ message: error.message });
  }
};

export const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = req.userId;

    const workout = await jurnalModel.findOne({ _id: id, owner });

    if (!workout) return res.status(404).json({ message: 'Workout does not exist.' });

    console.log(
      chalk.green.bold(
        `[${new Date().toLocaleString()}] GET /jurnal/getWorkout/${id} ${workout.title} retrieved.`
      )
    );
    res.status(200).json(workout);
  } catch (error) {
    console.log(
      chalk.red.bold(`[${new Date().toLocaleString()}] GET /jurnal/getWorkout/${id} ${error}`)
    );
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, exercises, date, duration } = req.body;
    const owner = req.userId;

    const workout = await jurnalModel.findOne({ _id: id, owner });
    if (!workout) return res.status(404).json({ message: 'Workout does not exist.' });

    const updatedWorkout = await jurnalModel.findByIdAndUpdate(
      id,
      { title, exercises, date, duration },
      { new: true }
    );

    console.log(
      chalk.green.bold(
        `[${new Date().toLocaleString()}] PATCH /jurnal/updateWorkout/${id} ${
          updatedWorkout.title
        } updated.`
      )
    );
    res.status(200).json(updatedWorkout);
  } catch (error) {
    console.log(
      chalk.red.bold(`[${new Date().toLocaleString()}] PATCH /jurnal/updateWorkout/${id} ${error}`)
    );
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const owner = req.userId;

    const workout = await jurnalModel.findOne({ _id: id, owner });
    if (!workout) return res.status(404).json({ message: 'Workout does not exist.' });

    await jurnalModel.findByIdAndRemove(id);

    console.log(
      chalk.green.bold(
        `[${new Date().toLocaleString()}] DELETE /jurnal/deleteWorkout/${id} ${
          workout.title
        } deleted.`
      )
    );
    res.status(200).json({ message: 'Workout deleted successfully.' });
  } catch (error) {
    console.log(
      chalk.red.bold(`[${new Date().toLocaleString()}] DELETE /jurnal/deleteWorkout/${id} ${error}`)
    );
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
