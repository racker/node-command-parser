/**
 *  Copyright 2011 Rackspace
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

var config = {
  shortDescription: 'List services',
  longDescription: 'List services long',
  requiredArguments : [],
  optionalArguments: [['server', 'only list services on this server']],
  options: [
    {
      names: ['--display-disabled'],
      dest: 'display-disabled',
      action: 'store_true',
      desc: 'Display disabled services'
    },
    {
      names: ['--filter'],
      dest: 'filter',
      action: 'append',
      desc: 'Apply a filter to the list of displayed services'
    }
  ]
};

function handleCommand(args) {
  if (args.server) {
    return 'Listing services for server ' + args.server;
  }
  else {
    return 'Listing services for all servers';
  }
}

exports.config = config;
exports.handleCommand = handleCommand;
