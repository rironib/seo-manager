# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-02-01

### Added

- New architecture splitting Client Components from Server-safe logic.
- `src/server.ts` to host pure logic for Next.js Metadata API.
- Support for using `<Seo />` inside Server Components without requiring `"use client"` in the parent file.

### Changed

- **BREAKING CHANGE**: Renamed `resolveNextMetadata` to `seo` for a smarter, more concise API.
- Refactored `seo()` logic to use object spreading for a smaller footprint.
- Simplified `npx @rironib/seo-manager` to create a standard `config/` directory instead of `@config/`.
- Updated documentation and README to reflect the streamlined "one-config" workflow.

### Fixed

- "createContext only works in Client Components" error when importing the library into Next.js App Router Server Components.
- Directory creation issues and inconsistent log paths in the initialization script.

## [1.0.0] - 2026-01-31

### Added

- Initial release of `@rironib/seo-manager`.
- Basic `Seo` component for dynamic meta updates.
- `SeoProvider` for React context-based configuration.
- `resolveNextMetadata` utility for Next.js App Router.
- CLI initializer via `npx`.
