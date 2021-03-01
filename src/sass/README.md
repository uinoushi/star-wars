# Styling rules and structure

Sass 6-1 pattern (a 7-1 pattern modified for Angular)

- abstracts/ (Only non rendered sass code, like vars and mixins)
- vendors/ (Place 3rd party css in the folder, even if later imported by components)
- base/ (Only what is strictly global goes here)
- layout/ (General layout here)
- themes/ (Only the theme)
- components/(Abstract and global: see [README.md](components/README.md) inside the folder)

Note: pages/ are not used because they are solved by the components themselves.
