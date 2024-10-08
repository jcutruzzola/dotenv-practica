import { Command } from "commander";

const program = new Command();

// 1- comando // 2 - descripcion // 3 - valor por default

program
    .option("--mode <mode>", "modo de trabajo", "desarrollo");


program.parse();

export default program;

