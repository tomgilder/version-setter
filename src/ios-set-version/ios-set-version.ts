/// <reference path="../node_modules/vsts-task-lib/task.d.ts" />
/// <reference path="../../definitions/node.d.ts" />
/// <reference path="../../definitions/q.d.ts" />

"use strict";
import * as tr from "vsts-task-lib/toolrunner";
const task = require('vsts-task-lib/task');
const path = require('path');

var plistPath = task.getInput('plistPath', true);
var cfBundleShortVersionString = task.getInput('CFBundleShortVersionString', true);
var cfBundleVersion = task.getInput('CFBundleVersion', true);

Bash.createToolRunner('ios-set-version.sh')
    .arg(plistPath)
    .arg(cfBundleShortVersionString)
    .arg(cfBundleVersion)
    .execSync();

class Bash
{
    public static createToolRunner(filename:string) : tr.ToolRunner
    {
        return new tr.ToolRunner(task.which('bash', true))
                .arg(path.resolve(__dirname, filename));
    }
}