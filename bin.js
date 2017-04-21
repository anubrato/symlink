#!/usr/bin/env node
var argv = require('yargs')
  .usage('Usage: symlink <repoDirs> [options]')
  .demand(1)
  .example('symlink ./repos -p @mycompany')
  .example('symlink ./repos -g coveralls -g nodeunit -p @mycompany')
  .alias('e', 'execute')
  .describe('e', 'Execute the commands generated')
  .boolean('e')
  .alias('g', 'global')
  .describe('g', 'globally installed module to be linked')
  .array('g') // NB: will be unset if not used (default strings are ugly)
  .alias('h', 'help')
  .help('h')
  .alias('p', 'prefix')
  .describe('p', 'Prefix for local modules')
  .demandOption(['p'], 'Please provide a local module prefix to handle peerDependencies correctly.')
  .array('p') // NB: Like 'g', will be unset if not used
  .argv;

require('./').cli(argv, function (err) {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  process.exit(0);
});
