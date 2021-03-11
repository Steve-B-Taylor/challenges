import express from "express"

import educationExperiencesRouter from "./api/v1/educationExperiencesRouter.js"
import projectsRouter from "./api/v1/projectsRouter.js"
import skillsRouter from "./api/v1/skillsRouter.js"
import volunteerExperiencesRouter from "./api/v1/volunteerExperiencesRouter.js"
import workExperiencesRouter from "./api/v1/workExperiencesRouter.js"
import router from "./clientRouter.js"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/education-experiences", educationExperiencesRouter)
rootRouter.use("/api/v1/projects", projectsRouter)
rootRouter.use("/api/v1/skills", skillsRouter)
rootRouter.use("/api/v1/volunteer-experiences", volunteerExperiencesRouter)
rootRouter.use("/api/v1/work-experiences", workExperiencesRouter)

// This is the client-side React router.
// All other routes go above this.
rootRouter.use("/", clientRouter)

export default rootRouter
