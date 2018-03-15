# デプロイ用レシピ recepe for deploy

deployDir = node['deploy_env']['deploy_dir']

# git clone
git deployDir do
  # NOTE: SSH公開鍵 & 秘密鍵は登録済みを想定 for registrated ssh public & private key
  #       ~/.ssh/authorized_keysに公開鍵を追記すればパスワードが不要になる 
  repository node['deploy_env']['git_ssh_url']
  user node['deploy_env']['user']
  not_if "test -d #{deployDir}"
end

# git pull
# 常に最新へ 
execute 'git pull' do
  user node['deploy_env']['user']
  cwd deployDir
  command 'git pull origin master'
end

# Docker-Compose restarting 
execute 'restart docker-compose' do
  user node['deploy_env']['user']
  cwd deployDir
  command 'docker-compose down'
  command 'docker-compose up -d --build'
end
