#!/usr/bin/env node

import * as p from '@clack/prompts'
import {setTimeout} from 'node:timers/promises'
import colors from 'picocolors'
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


async function main(){
    const namer=await rl.question("enter your name ");
    const number=await rl.question("enter a number ");
    const s=p.spinner()
    s.start()
    await setTimeout(3000)
    s.stop()
    p.intro(`${colors.bgMagentaBright(colors.black(`${namer} ki mkc ${number} baar`))}`)
    p.outro(`Thanks for playing`)
}

main();
