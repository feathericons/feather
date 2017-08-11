# Installing IIS
package 'iis'do
	action :install
end
# enable platform default firewall
firewall 'default' do
	action :install
end

# open standard ssh port
firewall_rule 'iis' do
	port	80
	command	:allow
end
