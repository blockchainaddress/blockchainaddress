@rem deploy

@SET /P ANSWER="deploy start? (yN): "

@if /i {%ANSWER%}=={y} (goto :yes)
@if /i {%ANSWER%}=={yes} (goto :yes)

@EXIT

:yes
@rem if you put ssh private key on local, you can do below without password
itamae ssh -u wordi -h 153.126.132.132 -p 10022 -j itamae/node.json itamae/deploy_recipe.rb -i local/id_rsa.deploy
