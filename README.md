# Reproduction for issue with next router in tests - Next.js (TypeScript)

<p>
  This is project generated to serve as a reproduction starter for Storybook.
</p>

<a  href="https://stackblitz.com/github/storybookjs/sandboxes/tree/next/nextjs/default-ts/after-storybook?preset=node=">
  View it in Stackblitz
</a>

<h3>Testing instructions</h3>

<p>Install dependencies:</p>
<pre>
  yarn
</pre>

<p>Run Storybook:</p>
<pre>
  yarn storybook
</pre>


This reproduction repo shows an issue when importing a story of a component using `useRouter` in a test. The test fails with an error : "NextRouter was not mounted"

- `MyComp` is a component using the `useRouter` hook from `next/router`
- It has a story, that displays well in Storybook. The router path is `toto1`, set in the `nextjs.router` story parameters. Storybook uses the `@storybook/nextjs` framework.
- If you launch the component test (`yarn test`), test fails with error : `NextRouter was not mounted`. This is because no Next router provider is set in rendered story.
- If you **uncomment** in `preview.ts` the nextRouter parameter AND the `WithNextRouter` decorator, it enables the `storybook-addon-next-router` addon. Now story show `toto2` as the path, set from `nextRouter` story parameters. Test now works well.