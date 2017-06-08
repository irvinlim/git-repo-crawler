import path from 'path';
import dir from 'node-dir';
import { argv } from 'yargs';
import { execSync } from 'child_process';
import 'colors';

// Get root directory from argv, or default from current working directory.
const rootDirectory = argv.d || argv.directoryRoot || process.cwd();

// Optionally execute a command in each directory
const command = argv.c || argv.command || '';

dir.subdirs(rootDirectory, function(err, subdirs) {
    const gitDirectories = subdirs
        .filter(dir => dir.search(/\.git$/) >= 0)
        .map(dir => path.resolve(process.cwd(), dir.slice(0, dir.length - 4)));

    // Run command in every directory.
    if (command.length) {
        gitDirectories.forEach(fullPath => {
            // Output directory to screen.
            console.log(`Running "${command}" in ${fullPath}:\n`.yellow);

            // Execute the command in the directory.
            execSync(command, {
                cwd: fullPath,
                stdio: [0, 1, 2]
            });

            // Show when execution is complete.
            console.log('\nExecution complete.\n'.green);
        });
    } else {
        console.log(`Found ${gitDirectories.length} Git directories from ${path.resolve(process.cwd(), rootDirectory)}:\n`.yellow);
        
        // Simply print out the list of directories.
        gitDirectories.forEach(dir => console.log(dir));
    }
});
