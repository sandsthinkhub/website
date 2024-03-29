import connectToDatabase from "../../lib/dbConnect";

import mongoose, { model, models } from 'mongoose';




async function submitForm(req, res) {
	const courseUserSchema = new mongoose.Schema({

		Name: String,
		Email: String,
		RazorpayOrderId: String,
		RazorpayPaymentId: String,
		RazorpaySignature: String,
		price: String,

		CourseId: String,

	})
	const courseUserModel = models.courseUser || model('courseUser', courseUserSchema)


	const CouserDataSchema = new mongoose.Schema({
		CourseName: { type: String, required: true },
		CourseId: { type: String, required: true },




	});
	const courseDataModel = models.coursesData || model('coursesData', CouserDataSchema)

	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method Not Allowed" });
	}


	console.log("working")

	try {
		const { userdata, courseId, payData, price, name } = req.body;
		console.log(req.body)
		const Email = userdata?.email
		const CourseName = req.body?.name
		const Name = userdata?.name
		const CourseId = req.body?.courseId
		const RazorpayOrderId = payData?.razorpay_order_id
		console.log(RazorpayOrderId)
		const RazorpayPaymentId = payData?.razorpay_payment_id
		const RazorpaySignature = payData?.razorpay_signature
		await connectToDatabase();
		let checkUserIsAlreadyFilled = await courseUserModel.findOne({ CourseId, Email })
		if (checkUserIsAlreadyFilled) {
			return res.status(200).json({ message: "User You have already Registered for the Course" })
		}
		else {
			let check = await courseDataModel.findOne({ CourseId })
			if (check) {




				console.log("milgya")
				const saveusers = new courseUserModel({

					Name,
					Email,
					RazorpayOrderId,
					RazorpayPaymentId,
					RazorpaySignature,
					price,
					CourseId,

				})
				await saveusers.save()

			} else {


				check = new courseDataModel({
					CourseName,
					CourseId,


				})
				await check.save()
				const saveusers = new courseUserModel({
					Name,
					Email,
					RazorpayOrderId,
					RazorpayPaymentId,
					RazorpaySignature,
					price,
					CourseId,

				})
				await saveusers.save()


			}








			return res.status(200).json({ message: "Form data saved successfully" });
		}
	} catch (error) {
		console.log(error)
		return res.status(500).json(error);
	}

}

export default submitForm;