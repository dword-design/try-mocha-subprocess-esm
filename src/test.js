import { execa } from 'execa'
import parentModule from 'parent-module'
import P from 'path'
import fileUriToPath from 'file-uri-to-path'

export default func => execa('node', ['-e', `(${func.toString()})()`], { cwd: P.dirname(fileUriToPath(parentModule())), stdio: 'inherit' })
