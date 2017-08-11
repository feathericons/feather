#download and install windows updates

#adapted from http://msdn.microsoft.com/en-us/library/aa387102%28VS.85%29.aspx
require 'win32ole'
require 'ruby-wmi'

session = WIN32OLE.new("Microsoft.Update.Session")
searcher = session.CreateUpdateSearcher
updates_query = "IsInstalled=0 and Type='Software' and AutoSelectOnWebSites=1" #XXX make this an attribute?
Chef::Log.debug("Searching for updates...")
result = searcher.search(updates_query)

if result.updates.count > 0
  updates = WIN32OLE.new("Microsoft.Update.UpdateColl")

  result.updates.each do |update|
    notes = []
    if update.isdownloaded
      notes << "already downloaded"
    else
      updates.add(update)
      notes << "downloading"
    end
    unless update.EulaAccepted
        update.AcceptEula
        notes << "accepted EULA"
    end
    Chef::Log.debug("* #{update.Title} (#{notes.join(', ')})")
  end

  if updates.count > 0
    Chef::Log.info("Downloading #{updates.count} updates (this may take a long time)...")

    downloader = session.CreateUpdateDownloader
    downloader.updates = updates
    downloader.download
  end

  updates = WIN32OLE.new("Microsoft.Update.UpdateColl")

  result.updates.each do |update|
    if update.isdownloaded
      updates.add(update)	
    end
  end

  Chef::Log.info("Installing #{updates.count} updates (this may take a long time)...")
  installer = session.CreateUpdateInstaller
  installer.updates = updates
  result = installer.install
	
  Chef::Log.debug("Installation Result: #{result.ResultCode}")

  if result.RebootRequired
    Chef::Log.warn("REBOOT IS REQUIRED")
#    WMI::Win32_OperatingSystem.find(:first).reboot
  else
    Chef::Log.debug("No reboot required")
  end
else
  Chef::Log.info("No updates available")
end