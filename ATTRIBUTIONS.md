# Third-party materials

Full copyright and licence notices are provided in [public/THIRD-PARTY-NOTICES.txt](public/THIRD-PARTY-NOTICES.txt). Vite copies this file into the published site at `/THIRD-PARTY-NOTICES.txt` (under the configured site base path, if applicable).

- **shadcn/ui:** source components included in the Figma Make export, under the [MIT licence](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md). The original text is preserved in [licenses/shadcn-ui-MIT.txt](licenses/shadcn-ui-MIT.txt).
- **Runtime libraries:** notices for React, React DOM, React Router, Motion, Lucide, and their installed dependencies are collected from their package licence files.
- **Unsplash:** the Figma Make export attributes some photos to [Unsplash](https://unsplash.com), under its [standard photo licence](https://unsplash.com/license). Individual photo sources have not been audited; this statement does not establish the provenance or clearance of every image.

These third-party licences apply only to their respective materials. They do not license the portfolio as a whole or grant rights to client screenshots, logos, or other separately owned assets.

Run `npm run notices` to refresh dependency notices. `npm run build` does this automatically before producing the published build. If additional runtime libraries are introduced, update the entry list in `scripts/generate-notices.mjs`.
