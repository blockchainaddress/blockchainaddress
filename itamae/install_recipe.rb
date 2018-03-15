# プロビジョニング用レシピ recipe for provisioning

execute 'yum update' do
  command 'yum update -y'
end

# * CentOS7にDockerをインストールする installing Docker to CentOS7: https://qiita.com/inakadegaebal/items/be9fecce813cebec5986
execute 'install docker' do
  command 'sudo yum remove -y docker docker-common docker-selinux docker-engine'

  command 'sudo yum install -y yum-utils device-mapper-persistent-data lvm2'
  command 'sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo'
  
  command 'sudo yum makecache fast'
  #command 'sudo yum install docker-ce.17.12.0.ce-1.e17.centos'
  # 最新 latest
  command 'sudo yum install -y docker-ce'
end
execute 'add docker group' do
  command 'sudo groupadd docker'
  command 'sudo gpasswd -a $USER docker'
end
execute 'restart docker' do
  command 'sudo systemctl restart docker'
end

# * CentOS7.3にDocker Composeまでインストール installing Docker to CentOS7.3: https://qiita.com/sawadashota/items/2bed41598d825d488701
execute 'install docker-compose(first)' do
  user 'root'
  # NOTE: バージョンは手動で変更 change version manually
  command 'curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` > /usr/bin/docker-compose'
end
execute 'install docker-compose(second)' do
  user 'root'
  command 'chmod +x /usr/bin/docker-compose'
end
