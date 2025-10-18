#### О том, как и зачем корректно ветвиться

Мы бережем main-ветку, поэтому она защищена от прямого пуша. Для внесения изменений в ветку main необходимо ответвиться, и только потом запушить:

```bash
git checkout -b "hotfix/critical-security-patch"
git push --set-upstream origin hotfix/critical-security-patch
```

После завершения работы в ветке необходимо сделать pull-реквест (с возможным squash and merge) и после одобрения участников (смотри howtoapprove.md) влить в main.