# Partialize

## Description

Provides a simple function that partializes functions with up to 10 parameters.

## Installation

### Using npm:

```
npm install @slicr97/partialize
```

### Using yarn:

```
yarn add @slicr97/partialize
```

## Usage

To give you an example of how this library works, look at the following code snippet:

```typescript
import { partialize } from '@slicr97/partialize'

const _add = (x: number, y: number) => x + y
const add = partialize(_add)

const result = add(2)(2) // 4
```
