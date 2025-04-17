import { Request, Response, NextFunction } from "express";
import { processUserSchema } from "../domain/dtos/process-user";
import { differenceInYears } from "date-fns";

export const processUser = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		// Validate request body
		const userData = processUserSchema.safeParse(req.body);

		if (!userData.success) {
			res.status(400).json({
				error: "Invalid request data",
				details: userData.error.format(),
			});
			return;
		}

		const { user, transactions } = userData.data;

		// Calculate age
		const dob = new Date(user.dateOfBirth);
		const today = new Date();
		const age = differenceInYears(today, dob);

		// Calculate total amount and transaction count
		const totalAmount = transactions.reduce(
			(sum, transaction) => sum + transaction.amount,
			0
		);
		const transactionCount = transactions.length;

		// Send response
		res.status(200).json({
			name: user.name,
			totalAmount,
			transactionCount,
			userAge: age,
		});
	} catch (error) {
		next(error);
	}
};
