# Abstracts: vars and mixins

## Warning: only place non-rendering sass in these folders

Like variables and mixins, these files will be imported in many places and should not output code directly.

## Usage

To import variables and mixins to your component do the following.

```
@import "vars/colors";
@import "mixins/generic";
```

Or import all abstracts in one line.

```
@import "abstracts";
```
