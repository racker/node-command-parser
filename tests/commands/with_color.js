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
  shortDescription: 'Return passed args',
  longDescription: 'Return passed args',
  requiredArguments : [],
  optionalArguments: [],
  options: [],
  usesGlobalOptions: ['colors']
};

function handleCommand(args, commandParser) {
  return args;
}

exports.config = config;
exports.handleCommand = handleCommand;
