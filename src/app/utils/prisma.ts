/**
 * Prisma client for database access.
 * This module exports an instance of the PrismaClient class, which is used for interacting with the database.
 * @returns {PrismaClient} An instance of the PrismaClient class for database operations.
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default prisma;