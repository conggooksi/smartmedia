# Git

1.  사용자 설정

> \$ git config --global user.name "Your Name"
> \$ git config --global user.email you@example.com



2. cmd창에서 설정하고자 하는 폴더로 이동

git init  <- 이 폴더를 깃으로 관리하겠다는 의미

(( git status <- 깃 상태 확인 ))

git add 파일 이름

(( git status <- 깃 상태 확인 ))

git commit -m "메시지 작성"

git log <- 커밋한 파일 확인 가능

git checkout [git log에 나온 commit 뒤에 있는 아이디 복붙] <- 해당 순서만 나옴

git checkout main <- 사라졌던 git log 다시 나옴

git branch

git branch 이름 <- branch 생성

merge <- 주 브랜치에 가서 합칠 브랜치를 불러옴 ( ex) git merge test )

git stash <- 현재 상태 저장 ( 작업한 내용 보다 먼저 다른거 추가 하고 싶을 때 사용 )

git stash list 하면 저장한거 나옴

git stash apply [ git stash list 하면 앞에 나오는 이름( stash@{0} ) ]

1번 방법 git clone 깃 주소

2번 방법
git remote add origin 깃허브 주소
git remote -v

git pull origin 브랜치이름
git push origin 브랜치이름

marktext 로 편하게 마크다운 작성 가능
콜론 두개 사이에 검색하면 아이콘 가능