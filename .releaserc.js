/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['master'],
  tagFormat: 'v${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [{ type: 'chore', scope: 'release', release: 'patch' }]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: ['dist/**']
      }
    ]
  ]
};
